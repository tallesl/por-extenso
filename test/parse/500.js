var assert = require('assert')
  , parse  = require('../../lib/por-extenso').parse

it('quinhentos+', function () {

  assert.equal(parse('quinhentos'         ) , '500')
  assert.equal(parse('quinhentos e um'    ) , '501')
  assert.equal(parse('quinhentos e dois'  ) , '502')
  assert.equal(parse('quinhentos e três'  ) , '503')
  assert.equal(parse('quinhentos e quatro') , '504')
  assert.equal(parse('quinhentos e cinco' ) , '505')
  assert.equal(parse('quinhentos e seis'  ) , '506')
  assert.equal(parse('quinhentos e sete'  ) , '507')
  assert.equal(parse('quinhentos e oito'  ) , '508')
  assert.equal(parse('quinhentos e nove'  ) , '509')

  assert.equal(parse('quinhentos e dez'      ) , '510')
  assert.equal(parse('quinhentos e onze'     ) , '511')
  assert.equal(parse('quinhentos e doze'     ) , '512')
  assert.equal(parse('quinhentos e treze'    ) , '513')
  assert.equal(parse('quinhentos e quatorze' ) , '514')
  assert.equal(parse('quinhentos e quinze'   ) , '515')
  assert.equal(parse('quinhentos e dezesseis') , '516')
  assert.equal(parse('quinhentos e dezessete') , '517')
  assert.equal(parse('quinhentos e dezoito'  ) , '518')
  assert.equal(parse('quinhentos e dezenove' ) , '519')

  assert.equal(parse('quinhentos e vinte'         ) , '520')
  assert.equal(parse('quinhentos e vinte e um'    ) , '521')
  assert.equal(parse('quinhentos e vinte e dois'  ) , '522')
  assert.equal(parse('quinhentos e vinte e três'  ) , '523')
  assert.equal(parse('quinhentos e vinte e quatro') , '524')
  assert.equal(parse('quinhentos e vinte e cinco' ) , '525')
  assert.equal(parse('quinhentos e vinte e seis'  ) , '526')
  assert.equal(parse('quinhentos e vinte e sete'  ) , '527')
  assert.equal(parse('quinhentos e vinte e oito'  ) , '528')
  assert.equal(parse('quinhentos e vinte e nove'  ) , '529')

  assert.equal(parse('quinhentos e trinta'         ) , '530')
  assert.equal(parse('quinhentos e trinta e um'    ) , '531')
  assert.equal(parse('quinhentos e trinta e dois'  ) , '532')
  assert.equal(parse('quinhentos e trinta e três'  ) , '533')
  assert.equal(parse('quinhentos e trinta e quatro') , '534')
  assert.equal(parse('quinhentos e trinta e cinco' ) , '535')
  assert.equal(parse('quinhentos e trinta e seis'  ) , '536')
  assert.equal(parse('quinhentos e trinta e sete'  ) , '537')
  assert.equal(parse('quinhentos e trinta e oito'  ) , '538')
  assert.equal(parse('quinhentos e trinta e nove'  ) , '539')

  assert.equal(parse('quinhentos e quarenta'         ) , '540')
  assert.equal(parse('quinhentos e quarenta e um'    ) , '541')
  assert.equal(parse('quinhentos e quarenta e dois'  ) , '542')
  assert.equal(parse('quinhentos e quarenta e três'  ) , '543')
  assert.equal(parse('quinhentos e quarenta e quatro') , '544')
  assert.equal(parse('quinhentos e quarenta e cinco' ) , '545')
  assert.equal(parse('quinhentos e quarenta e seis'  ) , '546')
  assert.equal(parse('quinhentos e quarenta e sete'  ) , '547')
  assert.equal(parse('quinhentos e quarenta e oito'  ) , '548')
  assert.equal(parse('quinhentos e quarenta e nove'  ) , '549')

  assert.equal(parse('quinhentos e cinquenta'         ) , '550')
  assert.equal(parse('quinhentos e cinquenta e um'    ) , '551')
  assert.equal(parse('quinhentos e cinquenta e dois'  ) , '552')
  assert.equal(parse('quinhentos e cinquenta e três'  ) , '553')
  assert.equal(parse('quinhentos e cinquenta e quatro') , '554')
  assert.equal(parse('quinhentos e cinquenta e cinco' ) , '555')
  assert.equal(parse('quinhentos e cinquenta e seis'  ) , '556')
  assert.equal(parse('quinhentos e cinquenta e sete'  ) , '557')
  assert.equal(parse('quinhentos e cinquenta e oito'  ) , '558')
  assert.equal(parse('quinhentos e cinquenta e nove'  ) , '559')

  assert.equal(parse('quinhentos e sessenta'         ) , '560')
  assert.equal(parse('quinhentos e sessenta e um'    ) , '561')
  assert.equal(parse('quinhentos e sessenta e dois'  ) , '562')
  assert.equal(parse('quinhentos e sessenta e três'  ) , '563')
  assert.equal(parse('quinhentos e sessenta e quatro') , '564')
  assert.equal(parse('quinhentos e sessenta e cinco' ) , '565')
  assert.equal(parse('quinhentos e sessenta e seis'  ) , '566')
  assert.equal(parse('quinhentos e sessenta e sete'  ) , '567')
  assert.equal(parse('quinhentos e sessenta e oito'  ) , '568')
  assert.equal(parse('quinhentos e sessenta e nove'  ) , '569')

  assert.equal(parse('quinhentos e setenta'         ) , '570')
  assert.equal(parse('quinhentos e setenta e um'    ) , '571')
  assert.equal(parse('quinhentos e setenta e dois'  ) , '572')
  assert.equal(parse('quinhentos e setenta e três'  ) , '573')
  assert.equal(parse('quinhentos e setenta e quatro') , '574')
  assert.equal(parse('quinhentos e setenta e cinco' ) , '575')
  assert.equal(parse('quinhentos e setenta e seis'  ) , '576')
  assert.equal(parse('quinhentos e setenta e sete'  ) , '577')
  assert.equal(parse('quinhentos e setenta e oito'  ) , '578')
  assert.equal(parse('quinhentos e setenta e nove'  ) , '579')

  assert.equal(parse('quinhentos e oitenta'         ) , '580')
  assert.equal(parse('quinhentos e oitenta e um'    ) , '581')
  assert.equal(parse('quinhentos e oitenta e dois'  ) , '582')
  assert.equal(parse('quinhentos e oitenta e três'  ) , '583')
  assert.equal(parse('quinhentos e oitenta e quatro') , '584')
  assert.equal(parse('quinhentos e oitenta e cinco' ) , '585')
  assert.equal(parse('quinhentos e oitenta e seis'  ) , '586')
  assert.equal(parse('quinhentos e oitenta e sete'  ) , '587')
  assert.equal(parse('quinhentos e oitenta e oito'  ) , '588')
  assert.equal(parse('quinhentos e oitenta e nove'  ) , '589')

  assert.equal(parse('quinhentos e noventa'         ) , '590')
  assert.equal(parse('quinhentos e noventa e um'    ) , '591')
  assert.equal(parse('quinhentos e noventa e dois'  ) , '592')
  assert.equal(parse('quinhentos e noventa e três'  ) , '593')
  assert.equal(parse('quinhentos e noventa e quatro') , '594')
  assert.equal(parse('quinhentos e noventa e cinco' ) , '595')
  assert.equal(parse('quinhentos e noventa e seis'  ) , '596')
  assert.equal(parse('quinhentos e noventa e sete'  ) , '597')
  assert.equal(parse('quinhentos e noventa e oito'  ) , '598')
  assert.equal(parse('quinhentos e noventa e nove'  ) , '599')

})

