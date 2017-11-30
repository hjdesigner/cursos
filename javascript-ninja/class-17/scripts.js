(function() {
  var text = 'Mark Elliot Zuckerberg (White Plains, 14 de maio de 1984) é um programador e empresário norte-americano, que ficou conhecido internacionalmente por ser um dos fundadores do Facebook,[4] a rede social mais acessada do mundo.[5][6] Em março de 2011, a revista Forbes colocou Zuckerberg na 36ª posição da lista das pessoas mais ricas do mundo, com uma fortuna estimada em 17.5 bilhões de dólares.[2] Em junho de 2015, sua fortuna já estava avaliada em 38.4 bilhões de dólares,[1] em 2016 seu patrimônio líquido foi estimado em 51,8 bilhões de dólares.[7] Junto com seus colegas da faculdade da Universidade de Harvard os estudantes Eduardo Saverin, Andrew McCollum, Dustin Moskovitz e Chris Hughes, lançou o Facebook em 2004.[8][9] O Facebook expandiu - se rapidamente, com um bilhão de usuários até 2012. Zuckerberg foi envolvido em várias disputas legais que foram iniciadas por outros no grupo, que reivindicou uma participação da empresa com base na sua participação durante a fase de desenvolvimento do Facebook. Em dezembro de 2012, Zuckerberg e sua esposa Priscilla Chan anunciaram que dariam a maior parte de sua riqueza ao longo de suas vidas para "fazer avançar o potencial humano e promover a igualdade" no espírito de The Giving Pledge.[10] Em 01 de dezembro de 2015, eles anunciaram que dariam 99 % de suas ações do Facebook(no valor de cerca de 45 bilhões de dólares na época) para a Iniciativa Zuckerberg Chan.[11][12] Desde 2010, a revista Time nomeou Zuckerberg entre as 100 pessoas mais ricas e influentes do mundo e também foi nomeado pela revista como a Pessoa do Ano.[13][14]';
  console.log(text);
  console.log(text.match(/M/));
  console.log(text.match(/M/g));
  console.log(text.match(/a/g));
  console.log(text.match(/de/g));
  console.log(text.match(/\w/g));
  console.log(text.match(/\1984/g));
  console.log(text.match(/\d/g));
  console.log(text.match(/\d\d/g));
  
  console.log(text.replace(/(de)/g, '--$1--'));
})();