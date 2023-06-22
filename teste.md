função maxDepth(nó):
    se nó for nulo, retorne 0
    
    leftDepth = maxDepth(nó.esquerda)
    rightDepth = maxDepth(nó.direita)
    
    profundidadeAtual = max(leftDepth, rightDepth) + 1
    
    retorne profundidadeAtual

// Criando a árvore de exemplo
raiz = novo Nó(3)
raiz.esquerda = novo Nó(9)
raiz.direita = novo Nó(20)
raiz.direita.esquerda = novo Nó(15)
raiz.direita.direita = novo Nó(7)

// Chamando a função para obter a profundidade máxima
profundidadeMaxima = maxDepth(raiz)
imprima profundidadeMaxima


Função calcularProfundidadeMaxima(nó):
    Se nó for nulo, retorne 0
    
    profundidadeEsquerda = calcularProfundidadeMaxima(nó.esquerda)
    profundidadeDireita = calcularProfundidadeMaxima(nó.direita)
    
    profundidadeAtual = max(profundidadeEsquerda, profundidadeDireita) + 1
    
    Retorne profundidadeAtual

// Criando a arvore
raiz = novo Nó(3)
raiz.esquerda = novo Nó(9)
raiz.direita = novo Nó(20)
raiz.direita.esquerda = novo Nó(15)
raiz.direita.direita = novo Nó(7)

// Chamando a função para calcular a profundidade máxima
profundidadeMaxima = calcularProfundidadeMaxima(raiz)

// Imprimindo o resultado
Imprima "A profundidade máxima da árvore é: " + profundidadeMaxima

A profundidade máxima da árvore é: 3
