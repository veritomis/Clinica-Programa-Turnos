 
  document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      locale: 'es', // Opcional: en español
      events: [
        {
          title: 'Turno con Juan Pérez',
          start: '2025-05-15T10:00:00'
        },
        {
          title: 'Consulta médica',
          start: '2025-05-17T14:00:00'
        }
      ],
      dateClick: function(info) {
        alert('Haz clic en ' + info.dateStr);
        // Aquí podrías abrir un formulario para agendar un turno
      }
    });

    calendar.render();
  });
 
