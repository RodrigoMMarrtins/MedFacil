import { PrismaClient } from '@prisma/client';
const prismaMiddleware = new PrismaClient();

prismaMiddleware.$use(async (params, next) => {
    // Se o modelo for agendamento...
  if (params.model == 'Appointment') {
    // Recebe os ids do paciente e do médico
    const { patientId, professionalId } = params.args.data;

    // Valida se patientId é um usuário do tipo NORMAL...
    const patient = await prismaMiddleware.user.findUnique({
      where: { id: patientId },
    });

    // Se não for envia um erro dizendo que o id não é valido para o paciente...
    if (!patient || patient.userType !== 'NORMAL') {
      throw new Error('O ID do paciente deve se referir a um usuário do tipo NORMAL.');
    }

    // Valida se professionalId é um usuário do tipo PROFESSIONAL...
    const professional = await prismaMiddleware.user.findUnique({
      where: { id: professionalId },
    });

    // Se não for exibe um erro de que o Id informado não se refere ao tipo PROFESSIONAL;
    if (!professional || professional.userType !== 'PROFESSIONAL') {
      throw new Error('O ID do profissional deve se referir a um usuário do tipo PROFESSIONAL.');
    }
  }

    // Passa para o próximo parâmetro
  return next(params);
});

export default prismaMiddleware;
