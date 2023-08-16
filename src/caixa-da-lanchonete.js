class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        console.log(itens)
        if(itens == undefined || itens.length == 0)
            return "Não há itens no carrinho de compra!"

        var soma = 0
        var resultado
        var valido = true

        itens.forEach(item => {
            var codigo = item.split(",", 1);
            var qtd = parseInt(item.split("")[item.length - 1]);
            
            if(qtd != 0){
                if(codigo == 'cafe')
                    soma = soma + (3*qtd);
                
                else if(codigo == 'chantily')
                    soma = soma + (1.5 * qtd);
                
                else if(codigo == 'suco'){
                    soma = soma + (6.2 * qtd);
                }
                else if(codigo == 'sanduiche'){
                    soma = soma + (6.5 * qtd);
                }
                else if(codigo == 'queijo'){
                    soma = soma + (2 * qtd);
                }
                else if(codigo == 'salgado'){
                    soma = soma + (7.25 * qtd);
                }
                else if(codigo == 'combo1'){
                    soma = soma + (9.5 * qtd);
                }
                else if(codigo == 'combo2'){
                    soma = soma + (7.5 * qtd);
                }
                else{
                    console.log("Item inválido!");
                    valido = false
                }
                console.log(soma)
            }
            else{
                return "Quantidade inválida!"
                valido = false
            }
        });

        if(metodoDePagamento == 'dinheiro'){
            if(valido != false){
                soma = 	soma * 0.95;
                resultado = "R$ " + soma.toFixed(2)
                console.log(resultado)
                return resultado
            }else{
                return "Quantidade inválida!"
            }
        }
        else if(metodoDePagamento == 'credito'){
            soma = soma + (soma * 0.03);
            resultado = "R$ " + soma.toFixed(2)
            console.log(resultado)
            return resultado
        }
        else{
            resultado = "R$ " + soma.toFixed(2)
            console.log(resultado)
            return resultado
        }
        
        return "";
    }

}

export { CaixaDaLanchonete };
