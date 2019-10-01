$(document).ready(function(){
  console.log('document ready')

  $(".main").onepage_scroll();

  $('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
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
      'incorrectResponse': 'Not quite'
    },
    {
      'q': 'How do you specify the questions and answers?',
      'options': [
        'MySQL database',
        'In the HTML',
        'In the javascript configuration'
      ],
      'correctIndex': 2,
      'correctResponse': 'Correct! Refer to the documentation for the structure.',
      'incorrectResponse': 'Wrong! Do it in the javascript configuration. You might need to read the documentation.'
    }
  ]
});

});
