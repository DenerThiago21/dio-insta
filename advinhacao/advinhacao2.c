#include<stdio.h>

int main()
{
  printf("************************************\n");
	printf("* Bem vindo ao Jogo de Adivinhação *\n");
	printf("************************************\n");

  int numerosecreto = 42;
  int chute;
  int tentativas = 1;

  while(1)
  {
    printf("qual é o seu %do. chute? ", tentativas);
    scanf("%d", &chute);

    if(chute < 0)
    {
      printf("Você não pode chutar números negativos\n");
      continue;
    }

    printf("Seu %do. chute foi %d\n", tentativas, chute);

    int acertou = chute == numerosecreto;
    int maior = chute > numerosecreto;

    if(acertou)
    {
      printf("Parabéns você acertou!\n");
      break;
    }
    else if(maior)
    {
      printf("seu chute foi maior que o número secreto\n");
    }
    else
    {
      printf("seu chute foi menor que o número secreto\n");
    }
    tentativas++;
  }
}
