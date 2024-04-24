//mi sono permesso di arricchire il contenuto delle info



let car = {                    
    "nam": " Punto ",          
    "color": "white",
    "size": 20,
    "func": (arg) => arg + 2,
    "obj": {                        
        "key": 2,
        "other": "ciao"
    }

}

for (const variable in car) {
    console.log(variable)
}
