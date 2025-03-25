nombre = input("Ingrese el nombre: ")
apellido = input("Ingrese el apellido: ")
dni = input("Ingrese su dni: ")

telefonos = []


while True: 
    
    telefono = input("Ingrese su telefono: ")
    
    telefonos.append(telefono)
    
    agregarNumero = input("Quiere agregar otro numero | 1.Si, 2.No: ")
    
    if agregarNumero == "2":
        break 

persona = [nombre, apellido, dni, telefonos]

print(persona)  