$(document).ready(function(){
  console.log('document ready')

  $(".main").onepage_scroll();

  $('#quiz').quiz({

  counterFormat: 'Question %current of %total',
  questions: [
    {
      'q': 'Ichiro Suzuki began his professional baseball career with the Seattle Mariners in 2001.',
      'options': [
        'True',
        'False'
      ],
      'correctIndex': 1,
      'correctResponse': 'Good job!',
      'incorrectResponse': 'Ichiro began his professional baseball career with the Orix Blue Wave of Nippon in Japan.'
    },
    {
      'q': 'In his first season the Mariners, Ichiro had a batting average of .350 and how many stolen bases? ',
      'options': [
        '43',
        '50',
        '56',
        '61'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct! The first to do so since Jackie Robinson.',
      'incorrectResponse': 'Incorrect'
    },
    {
      'q': 'Ichiro holds the record for most carrer hits in professional baseball.',
      'options': [
        'True',
        'False'
      ],
      'correctIndex': 1,
      'correctResponse': 'Correct! He is second to Pete Rose',
      'incorrectResponse': 'Not quite, he is second to Pete Rose'
    },
    {
      'q': 'In 2019, Ichiro retired at what age?',
      'options': [
        '39',
        '44',
        '45',
        '47'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct! The second oldest position player to start on opening day',
      'incorrectResponse': 'Incorrect'
    }
  ]
});

});
