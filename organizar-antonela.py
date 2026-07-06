from pathlib import Path
import shutil
import unicodedata

root = Path.cwd()

entrada_banners = (
    root
    / "public/eventos/antonela-2026/entrada-banners"
)

entrada_album = (
    root
    / "public/eventos/antonela-2026/entrada-album"
)

saida_banners = (
    root
    / "public/eventos/antonela-2026/banners"
)

saida_album = (
    root
    / "public/eventos/antonela-2026/album"
)

media_file = (
    root
    / "src/app/eventos/antonela-2026/media.ts"
)

saida_banners.mkdir(parents=True, exist_ok=True)
saida_album.mkdir(parents=True, exist_ok=True)

def normalizar(texto: str) -> str:
    texto = unicodedata.normalize("NFKD", texto)

    texto = "".join(
        caractere
        for caractere in texto
        if not unicodedata.combining(caractere)
    )

    return "".join(
        caractere
        for caractere in texto.upper()
        if caractere.isalnum()
    )

def localizar(pasta: Path):
    encontrados = {}

    if not pasta.exists():
        return encontrados

    for arquivo in pasta.iterdir():
        if not arquivo.is_file():
            continue

        if arquivo.suffix.lower() not in [
            ".png",
            ".jpg",
            ".jpeg",
            ".webp",
        ]:
            continue

        encontrados[normalizar(arquivo.stem)] = arquivo

    return encontrados

def limpar_pasta(pasta: Path):
    for arquivo in pasta.iterdir():
        if arquivo.is_file() and arquivo.suffix.lower() in [
            ".png",
            ".jpg",
            ".jpeg",
            ".webp",
        ]:
            arquivo.unlink()

banners_encontrados = localizar(entrada_banners)
album_encontrado = localizar(entrada_album)

limpar_pasta(saida_banners)
limpar_pasta(saida_album)

ordem_banners = [
    "CAPA",
    "CASAL1",
    "DECORACAO",
]

ordem_banners.extend(
    [f"AMIGOS{numero}" for numero in range(1, 22)]
)

urls_banners = []

for indice, nome in enumerate(ordem_banners, start=1):
    origem = banners_encontrados.get(nome)

    if not origem:
        print(f"BANNER NÃO ENCONTRADO: {nome}")
        continue

    destino = (
        saida_banners
        / f"banner-{indice:02d}.png"
    )

    shutil.copy2(origem, destino)

    urls_banners.append(
        f'/eventos/antonela-2026/banners/{destino.name}'
    )

capa_album = album_encontrado.get("CAPAALBUM")
url_capa = ""

if capa_album:
    destino = saida_album / "capa-album.png"

    shutil.copy2(capa_album, destino)

    url_capa = (
        "/eventos/antonela-2026/album/"
        "capa-album.png"
    )
else:
    print("CAPA DO ÁLBUM NÃO ENCONTRADA: CAPA ALBUM")

urls_album = []

for numero in range(2, 12):
    origem = album_encontrado.get(f"PARTE{numero}")

    if not origem:
        print(f"PÁGINA NÃO ENCONTRADA: PARTE{numero}")
        continue

    destino = (
        saida_album
        / f"album-{numero:02d}.png"
    )

    shutil.copy2(origem, destino)

    urls_album.append(
        f'/eventos/antonela-2026/album/{destino.name}'
    )

conteudo = [
    "export const antonelaBanners: string[] = [",
]

for url in urls_banners:
    conteudo.append(f'  "{url}",')

conteudo.extend([
    "];",
    "",
    f'export const antonelaAlbumCover = "{url_capa}";',
    "",
    "export const antonelaAlbumPhotos: string[] = [",
])

for url in urls_album:
    conteudo.append(f'  "{url}",')

conteudo.extend([
    "];",
    "",
])

media_file.write_text(
    "\n".join(conteudo),
    encoding="utf-8",
)

print("")
print("ORGANIZAÇÃO CONCLUÍDA")
print(f"Banners encontrados: {len(urls_banners)}")
print(f"Páginas do álbum: {len(urls_album)}")
print(f"Capa do álbum: {'sim' if url_capa else 'não'}")
print("")
print("Arquivos organizados em PNG.")
