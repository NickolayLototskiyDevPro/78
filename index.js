let ProjectModule = (function () {
    const project = {
        participants: [],
        pricing: {},
        isBusy: false,
        init(participants, pricing) {
            if (typeof pricing === 'object' || Array.isArray(participants)) {
                let participantsHaveLevel = participants.every(function (participant) {
                    return 'seniorityLevel' in participant;
                });

                if (participants.length === 0 || participantsHaveLevel || pricing !== null) {
                    this.participants = participants;
                    this.pricing = pricing;
                    this.isBusy = false;
                }
            }
        },

        findParticipant(functor, callbackFunction) {
            this.isBusy = true;
            setTimeout(() => {
                let result = this.participants.find(functor);
                (result === undefined) ? callbackFunction(null) : callbackFunction(result);
                this.isBusy = false;
            });
        },

        findParticipants(functor, callbackFunction) {
            this.isBusy = true;
            setTimeout(() => {
                let result = this.participants.filter(functor);
                (result === undefined) ? callbackFunction(null) : callbackFunction(result);
                this.isBusy = false;
            });
        },

        addParticipant(participantObject, callbackFunction) {
            this.isBusy = true;
            setTimeout(() => {
                if (typeof participantObject === 'object' && 'seniorityLevel' in participantObject) {
                    this.participants.push(participantObject);
                    callbackFunction();
                } else {
                    callbackFunction('Error');
                }
                this.isBusy = false;
            });
        },

        removeParticipant(participantObject, callbackFunction) {
            this.isBusy = true;
            setTimeout(() => {
                let removedIndex = this.participants.indexOf(participantObject);
                (removedIndex === -1) ? callbackFunction(null) : callbackFunction(this.participants.splice(removedIndex)[0]);
                this.isBusy = false;
            });
        },

        setPricing(participantPriceObject, callbackFunction) {
            this.isBusy = true;
            setTimeout(() => {
                Object.assign(this.pricing, participantPriceObject);
                callbackFunction();
                this.isBusy = false;
            });
        },

        calculateSalary(periodInDays) {
            let salary = this.participants.reduce((sum, i) => {
                return sum + this.pricing[i.seniorityLevel] * periodInDays * 8;
            }, 0);

            if (!isNaN(salary)) {
                return salary;
            } else {
                throw new Error('Error')
            }
        }
    };

    let instance,
        createInstance = () => project,
        getInstance = () => instance || (instance = createInstance());

    return getInstance();
})();

module.exports = {
    firstName: 'Natalia',
    lastName: 'Kovalyova',
    task: ProjectModule
};

// jest ../test/exam2.test.js
