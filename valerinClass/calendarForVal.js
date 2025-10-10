const { createApp } = Vue;
    
createApp({
  data() {
    return {
      calendars: []
    }
  },
  methods: {
    createCalendar(year, month) {
      const monthIndex = month - 1;
      const date = new Date(year, monthIndex);
      const monthNames = [
        'Январь', 'Февраль', 'Март', 'Апрель', 
        'Май', 'Июнь', 'Июль', 'Август', 
        'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
      ];
      
      // Определяем первый день месяца и количество дней
      const firstDay = (date.getDay() + 6) % 7; // Преобразуем к формату пн=0, вт=1, ..., вс=6
      const daysInMonth = new Date(year, month, 0).getDate();
      
      // Создаем массив недель
      const weeks = [];
      let currentWeek = { id: weeks.length + 1, days: [] };
      
      // Добавляем пустые ячейки до первого дня месяца
      for (let i = 0; i < firstDay; i++) {
        currentWeek.days.push({ id: currentWeek.days.length + 1, date: null, isWeekend: false });
      }
      
      // Добавляем дни месяца
      for (let day = 1; day <= daysInMonth; day++) {
        const dayOfWeek = (firstDay + day - 1) % 7;
        const isWeekend = dayOfWeek === 5 || dayOfWeek === 6; // суббота=5, воскресенье=6
        
        currentWeek.days.push({ 
          id: currentWeek.days.length + 1, 
          date: day, 
          isWeekend: isWeekend 
        });
        
        // Если неделя заполнена, начинаем новую
        if (currentWeek.days.length === 7) {
          weeks.push(currentWeek);
          currentWeek = { id: weeks.length + 1, days: [] };
        }
      }
      
      // Добавляем оставшиеся пустые ячейки в последнюю неделю
      if (currentWeek.days.length > 0) {
        while (currentWeek.days.length < 7) {
          currentWeek.days.push({ id: currentWeek.days.length + 1, date: null, isWeekend: false });
        }
        weeks.push(currentWeek);
      }
      
      return {
        id: `${year}-${month}`,
        year: year,
        month: month,
        monthName: monthNames[monthIndex],
        weeks: weeks
      };
    }
  },
  mounted() {
    // Создаем календари для учебного года (сентябрь 2025 - май 2026)
    const allCalendars = [];
    
    // Сентябрь 2025 - Декабрь 2025
    for (let month = 9; month <= 12; month++) {
      allCalendars.push(this.createCalendar(2025, month));
    }
    
    // Январь 2026 - Май 2026
    for (let month = 1; month <= 5; month++) {
      allCalendars.push(this.createCalendar(2026, month));
    }
    
    this.calendars = allCalendars;
  }
}).mount('#app');