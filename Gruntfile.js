module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), // Configuração de tarefa para compilar LESS em CSS atraves do plugin
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            }
        },
        uglify: { // Configuração de tarefa para comprimir JS
            target: {
                files: {
                    'main.min.js': 'main.js'
                }
            }

        }
    })





    grunt.loadNpmTasks('grunt-contrib-less'); // Esta linha carrega o plugin "grun-contrib-less"
    grunt.loadNpmTasks('grunt-contrib-uglify'); // Carregando o plugin "grunt-contrib-uglify"
    grunt.registerTask('default', ['less', 'uglify']) //  Função que registra uma tarefa padrão (default) no Grunt. Essa tarefa será executada automaticamente quando o Grunt for iniciado
}