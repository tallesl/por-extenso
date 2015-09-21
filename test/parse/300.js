var assert = require('assert')
  , parse  = require('../../lib/por-extenso').parse

it('trezentos+', function () {

  assert.equal(parse('trezentos'         ) ,'300')
  assert.equal(parse('trezentos e um'    ) , '301')
  assert.equal(parse('trezentos e dois'  ) , '302')
  assert.equal(parse('trezentos e três'  ) , '303')
  assert.equal(parse('trezentos e quatro') , '304')
  assert.equal(parse('trezentos e cinco' ) , '305')
  assert.equal(parse('trezentos e seis'  ) , '306')
  assert.equal(parse('trezentos e sete'  ) , '307')
  assert.equal(parse('trezentos e oito'  ) , '308')
  assert.equal(parse('trezentos e nove'  ) , '309')

  assert.equal(parse('trezentos e dez'      ) , '310')
  assert.equal(parse('trezentos e onze'     ) , '311')
  assert.equal(parse('trezentos e doze'     ) , '312')
  assert.equal(parse('trezentos e treze'    ) , '313')
  assert.equal(parse('trezentos e quatorze' ) , '314')
  assert.equal(parse('trezentos e quinze'   ) , '315')
  assert.equal(parse('trezentos e dezesseis') , '316')
  assert.equal(parse('trezentos e dezessete') , '317')
  assert.equal(parse('trezentos e dezoito'  ) , '318')
  assert.equal(parse('trezentos e dezenove' ) , '319')

  assert.equal(parse('trezentos e vinte'         ) , '320')
  assert.equal(parse('trezentos e vinte e um'    ) , '321')
  assert.equal(parse('trezentos e vinte e dois'  ) , '322')
  assert.equal(parse('trezentos e vinte e três'  ) , '323')
  assert.equal(parse('trezentos e vinte e quatro') , '324')
  assert.equal(parse('trezentos e vinte e cinco' ) , '325')
  assert.equal(parse('trezentos e vinte e seis'  ) , '326')
  assert.equal(parse('trezentos e vinte e sete'  ) , '327')
  assert.equal(parse('trezentos e vinte e oito'  ) , '328')
  assert.equal(parse('trezentos e vinte e nove'  ) , '329')

  assert.equal(parse('trezentos e trinta'         ) , '330')
  assert.equal(parse('trezentos e trinta e um'    ) , '331')
  assert.equal(parse('trezentos e trinta e dois'  ) , '332')
  assert.equal(parse('trezentos e trinta e três'  ) , '333')
  assert.equal(parse('trezentos e trinta e quatro') , '334')
  assert.equal(parse('trezentos e trinta e cinco' ) , '335')
  assert.equal(parse('trezentos e trinta e seis'  ) , '336')
  assert.equal(parse('trezentos e trinta e sete'  ) , '337')
  assert.equal(parse('trezentos e trinta e oito'  ) , '338')
  assert.equal(parse('trezentos e trinta e nove'  ) , '339')

  assert.equal(parse('trezentos e quarenta'         ) , '340')
  assert.equal(parse('trezentos e quarenta e um'    ) , '341')
  assert.equal(parse('trezentos e quarenta e dois'  ) , '342')
  assert.equal(parse('trezentos e quarenta e três'  ) , '343')
  assert.equal(parse('trezentos e quarenta e quatro') , '344')
  assert.equal(parse('trezentos e quarenta e cinco' ) , '345')
  assert.equal(parse('trezentos e quarenta e seis'  ) , '346')
  assert.equal(parse('trezentos e quarenta e sete'  ) , '347')
  assert.equal(parse('trezentos e quarenta e oito'  ) , '348')
  assert.equal(parse('trezentos e quarenta e nove'  ) , '349')

  assert.equal(parse('trezentos e cinquenta'         ) , '350')
  assert.equal(parse('trezentos e cinquenta e um'    ) , '351')
  assert.equal(parse('trezentos e cinquenta e dois'  ) , '352')
  assert.equal(parse('trezentos e cinquenta e três'  ) , '353')
  assert.equal(parse('trezentos e cinquenta e quatro') , '354')
  assert.equal(parse('trezentos e cinquenta e cinco' ) , '355')
  assert.equal(parse('trezentos e cinquenta e seis'  ) , '356')
  assert.equal(parse('trezentos e cinquenta e sete'  ) , '357')
  assert.equal(parse('trezentos e cinquenta e oito'  ) , '358')
  assert.equal(parse('trezentos e cinquenta e nove'  ) , '359')

  assert.equal(parse('trezentos e sessenta'         ) , '360')
  assert.equal(parse('trezentos e sessenta e um'    ) , '361')
  assert.equal(parse('trezentos e sessenta e dois'  ) , '362')
  assert.equal(parse('trezentos e sessenta e três'  ) , '363')
  assert.equal(parse('trezentos e sessenta e quatro') , '364')
  assert.equal(parse('trezentos e sessenta e cinco' ) , '365')
  assert.equal(parse('trezentos e sessenta e seis'  ) , '366')
  assert.equal(parse('trezentos e sessenta e sete'  ) , '367')
  assert.equal(parse('trezentos e sessenta e oito'  ) , '368')
  assert.equal(parse('trezentos e sessenta e nove'  ) , '369')

  assert.equal(parse('trezentos e setenta'         ) , '370')
  assert.equal(parse('trezentos e setenta e um'    ) , '371')
  assert.equal(parse('trezentos e setenta e dois'  ) , '372')
  assert.equal(parse('trezentos e setenta e três'  ) , '373')
  assert.equal(parse('trezentos e setenta e quatro') , '374')
  assert.equal(parse('trezentos e setenta e cinco' ) , '375')
  assert.equal(parse('trezentos e setenta e seis'  ) , '376')
  assert.equal(parse('trezentos e setenta e sete'  ) , '377')
  assert.equal(parse('trezentos e setenta e oito'  ) , '378')
  assert.equal(parse('trezentos e setenta e nove'  ) , '379')

  assert.equal(parse('trezentos e oitenta'         ) , '380')
  assert.equal(parse('trezentos e oitenta e um'    ) , '381')
  assert.equal(parse('trezentos e oitenta e dois'  ) , '382')
  assert.equal(parse('trezentos e oitenta e três'  ) , '383')
  assert.equal(parse('trezentos e oitenta e quatro') , '384')
  assert.equal(parse('trezentos e oitenta e cinco' ) , '385')
  assert.equal(parse('trezentos e oitenta e seis'  ) , '386')
  assert.equal(parse('trezentos e oitenta e sete'  ) , '387')
  assert.equal(parse('trezentos e oitenta e oito'  ) , '388')
  assert.equal(parse('trezentos e oitenta e nove'  ) , '389')

  assert.equal(parse('trezentos e noventa'         ) , '390')
  assert.equal(parse('trezentos e noventa e um'    ) , '391')
  assert.equal(parse('trezentos e noventa e dois'  ) , '392')
  assert.equal(parse('trezentos e noventa e três'  ) , '393')
  assert.equal(parse('trezentos e noventa e quatro') , '394')
  assert.equal(parse('trezentos e noventa e cinco' ) , '395')
  assert.equal(parse('trezentos e noventa e seis'  ) , '396')
  assert.equal(parse('trezentos e noventa e sete'  ) , '397')
  assert.equal(parse('trezentos e noventa e oito'  ) , '398')
  assert.equal(parse('trezentos e noventa e nove'  ) , '399')

})

