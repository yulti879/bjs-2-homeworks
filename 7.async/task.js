    /*Нужно написать программу-будильник-колыбельную с возможностью добавления, удаления, запусков и остановки звонков.*/

    class AlarmClock {
    	constructor() {
    		this.alarmCollection = [];
    		this.intervalId = null;
    	};

    	addClock(time, callback) {
    		if (!time || !callback) {
    			throw new Error('Отсутствуют обязательные аргументы')
    		};
    		if (this.alarmCollection.find(item => item.time === time)) {
    			console.warn('Уже присутствует звонок на это же время');
    		};
    		this.alarmCollection.push({
    			callback,
				time,
    			canCall: true
    		});
    	};

    	removeClock(removeTime) {
    		if (this.alarmCollection.length === 0) {
    			return;
    		};
    		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time != removeTime);
    	};

    	getCurrentFormattedTime() {
    		return new Date().toLocaleTimeString("ru-Ru", {
    			hour: "2-digit",
    			minute: "2-digit",
    		});
    	};

    	start() {
    		if (this.intervalId !== null) {
    			return;
    		};
    		this.intervalId = setInterval(() => {
    			this.alarmCollection.forEach(alarm => {
    				if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
    					alarm.callback();
    					alarm.canCall = false;
    				};
    			});
    		}, 1000);
    	};

    	stop() {
    		clearInterval(this.IntervalId);
    		this.intervalId = null;
    	};

    	resetAllCalls() {
    		this.alarmCollection.forEach(alarm => alarm.canCall = true);
    	};

    	clearAlarms() {
    		this.stop();
    		this.alarmCollection = [];
    	};
    };