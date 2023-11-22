async function getBerita(){
    const res = await fetch("http://localhost:8055/items/Berita")
    const data = await res.json()
    console.log(data)
}

getBerita()