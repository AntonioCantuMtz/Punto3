document.getElementById("myForm")
            .addEventListener('submit', MostrarDatos);
        
        function MostrarDatos()
        {
            var nombre = document.getElementById("nombre").value;

            var apellidos = document.getElementById("apellidos").value;

            var edad = document.getElementById("edad").value;

            var fechaNacimiento = document.getElementById("fechaNacimiento").value;

            var usuario = document.getElementById("usuario").value;

            var psw = document.getElementById("psw").value;
            
            alert(
                'nombre: ' +nombre+ '\n' +
                'apellidos: ' +apellidos+ '\n' +
                'edad: ' +edad+ '\n' +
                'fechaNacimiento: ' +fechaNacimiento+ '\n' +
                'usuario: ' +usuario+ '\n' +
                'password: ' +psw
            );
        }