#include <stdio.h>

#define NUMERO_DE_TENTATIVAS 3

int main()
{
	printf("************************************\n");
	printf("* Bem vindo ao Jogo de Adivinhação *\n");
	printf("************************************\n");

	int numerosecreto;
	numerosecreto = 42;

	int chute;

	for(int i = 1; i <= NUMERO_DE_TENTATIVAS; i++)
	{
		printf("Qual é o seu seu %do.chute?", i);
		scanf("%d", &chute);

		if(chute < 0)
		{
			printf("Você não pode chutar números negativos\n");
			i--;
			// passa para a proxima iteração sem a necessidade de entrar nas demais linhas de códio
			continue;
		}

		int acertou = chute == numerosecreto;
		int maior = chute > numerosecreto;

		printf("Você chutou o número %d\n", chute);

		if(acertou)
		{
			printf("Parabéns, você acertou!\n");
			break;
		}
		else if(maior)
		{
			printf("Seu chute foi maior que o número secreto!\n");
		}
		else
		{
			printf("Seu chute foi menor que o número secreto!\n");
		}
	}
	printf("Obrigado por jogar!\n");
}
