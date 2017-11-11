

/* { firstName: 'Natalia', lastName: 'Kovalyova', seniorityLevel: 'junior' } */

const participantObject = {
    firstName: string,
    lastName: string,
    seniorityLevel: string
};

/* { 'junior': 10 } */
const pricingObject = {
    roleName: number
};

const project = {
    participants: [],
    pricing: {
        'junior' : 100,
        'middle' : 200,
        'senior' : 300,
        'architect' : 500
    },
    isBusy: boolean,

    // устанавливает значения объекта
    init(participants, pricing) {
        if (participants === undefined || pricing === undefined) return false;
    },

    // поиск  1 подходящего участника
    findParticipant(functor, callbackFunction) {

    },

    // поиск всех участников
    findParticipants(functor, callbackFunction) { },

    // добавляет участника
    addParticipant(participantObject, callbackFunction) { },

    // удаляет объект участника
    removeParticipant(participantObject, callbackFunction) { },

    // устанавливает значение поля
    setPricing(participantPriceObject, callbackFunction) { },

    // возвращает зарплату участника за 8 часов
    calculateSalary(periodInDays) { }
}

module.exports = {
    firstName: 'Natalia',
    lastName: 'Kovalyova',
    task: ProjectModule
}