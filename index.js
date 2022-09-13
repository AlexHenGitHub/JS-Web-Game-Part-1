function newImage(url, left, bottom){
    let assets = document.createElement('img')
    assets.src = url
    assets.style.position = 'fixed'
    assets.style.left = left + 'px'
    assets.style.bottom = bottom + 'px'
    document.body.append(assets)
    return assets
}

function newItem(url, left, bottom){
    let assets = newImage(url, left, bottom)

    assets.addEventListener('dblclick', () => {
        assets.remove()
    })
}

//static assets
newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)

newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)


//removeable assets
newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)

newItem('assets/boulder.png', 800, 345)
newItem('assets/log.png', 800, 525)
newItem('assets/green-character/east.gif', 700, 450)
newItem('assets/green-character/north.gif', 700, 515)
newItem('assets/green-character/west.gif', 700, 410)
