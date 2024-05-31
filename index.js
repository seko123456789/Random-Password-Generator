
function Generate() {
    const h2 = document.getElementById("txt")
    const btn = document.getElementById("btn")

    const ALl = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&\()*+,-./:;<=>?@[]^_`{|}~'
    let pass = ""
    let Pass_len = 25
    const digits = "1234567890"
    do {
        for (let i = 0; i < Pass_len; i++) {
            let chars = Math.floor(Math.random() * ALl.length + 1)
            pass += ALl.charAt(chars)
        }

        try {
            if (!/\d/.test(pass)) {
                pass += Math.floor(Math.random() * digits)
            }
        }catch (error) {
            console.error((error))
        }
    }
    while (!/\d/.test(pass))
    btn.addEventListener("click" , () => {
        h2.innerText = pass
    })
}
Generate()

function Copy() {
    const copy = document.getElementById("copy")
    const txtToCopy = document.getElementById("txt")

    copy.addEventListener("click" , () => {
        navigator.clipboard.writeText(txtToCopy.innerText)
            .then(() => {
                console.log("Copied!")
            })
            .catch(err => console.error(`Error: ${err}`))
    })
}

function  Delete() {
    const txtToDelete = document.getElementById("txt")
    const delBtn = document.getElementById("del")

    delBtn.addEventListener("click" , () => {
        txtToDelete.innerText = ""
    })
}

Delete()



