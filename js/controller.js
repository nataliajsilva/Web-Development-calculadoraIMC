var pacientes = [];
var botao = document.getElementById("calcular");
botao.addEventListener('click', function() {
                                    var paciente = lePaciente();
                                    pacientes.push( paciente );
                                    mostraPaciente( paciente );
                                });