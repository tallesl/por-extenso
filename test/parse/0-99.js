var assert = require('assert')
  , parse  = require('../../lib/por-extenso').parse

it('zero - noventa e nove', function() {

  assert.equal(parse('zero'  ) , '0')
  assert.equal(parse('um'    ) , '1')
  assert.equal(parse('dois'  ) , '2')
  assert.equal(parse('três'  ) , '3')
  assert.equal(parse('quatro') , '4')
  assert.equal(parse('cinco' ) , '5')
  assert.equal(parse('seis'  ) , '6')
  assert.equal(parse('sete'  ) , '7')
  assert.equal(parse('oito'  ) , '8')
  assert.equal(parse('nove'  ) , '9')

  assert.equal(parse('dez'      ), '10')
  assert.equal(parse('onze'     ), '11')
  assert.equal(parse('doze'     ), '12')
  assert.equal(parse('treze'    ), '13')
  assert.equal(parse('quatorze' ), '14')
  assert.equal(parse('quinze'   ), '15')
  assert.equal(parse('dezesseis'), '16')
  assert.equal(parse('dezessete'), '17')
  assert.equal(parse('dezoito'  ), '18')
  assert.equal(parse('dezenove' ), '19')

  assert.equal(parse('vinte'         ) , '20')
  assert.equal(parse('vinte e um'    ) , '21')
  assert.equal(parse('vinte e dois'  ) , '22')
  assert.equal(parse('vinte e três'  ) , '23')
  assert.equal(parse('vinte e quatro') , '24')
  assert.equal(parse('vinte e cinco' ) , '25')
  assert.equal(parse('vinte e seis'  ) , '26')
  assert.equal(parse('vinte e sete'  ) , '27')
  assert.equal(parse('vinte e oito'  ) , '28')
  assert.equal(parse('vinte e nove'  ) , '29')

  assert.equal(parse('trinta'         ) , '30')
  assert.equal(parse('trinta e um'    ) , '31')
  assert.equal(parse('trinta e dois'  ) , '32')
  assert.equal(parse('trinta e três'  ) , '33')
  assert.equal(parse('trinta e quatro') , '34')
  assert.equal(parse('trinta e cinco' ) , '35')
  assert.equal(parse('trinta e seis'  ) , '36')
  assert.equal(parse('trinta e sete'  ) , '37')
  assert.equal(parse('trinta e oito'  ) , '38')
  assert.equal(parse('trinta e nove'  ) , '39')

  assert.equal(parse('quarenta'         ) , '40')
  assert.equal(parse('quarenta e um'    ) , '41')
  assert.equal(parse('quarenta e dois'  ) , '42')
  assert.equal(parse('quarenta e três'  ) , '43')
  assert.equal(parse('quarenta e quatro') , '44')
  assert.equal(parse('quarenta e cinco' ) , '45')
  assert.equal(parse('quarenta e seis'  ) , '46')
  assert.equal(parse('quarenta e sete'  ) , '47')
  assert.equal(parse('quarenta e oito'  ) , '48')
  assert.equal(parse('quarenta e nove'  ) , '49')

  assert.equal(parse('cinquenta'         ) , '50')
  assert.equal(parse('cinquenta e um'    ) , '51')
  assert.equal(parse('cinquenta e dois'  ) , '52')
  assert.equal(parse('cinquenta e três'  ) , '53')
  assert.equal(parse('cinquenta e quatro') , '54')
  assert.equal(parse('cinquenta e cinco' ) , '55')
  assert.equal(parse('cinquenta e seis'  ) , '56')
  assert.equal(parse('cinquenta e sete'  ) , '57')
  assert.equal(parse('cinquenta e oito'  ) , '58')
  assert.equal(parse('cinquenta e nove'  ) , '59')

  assert.equal(parse('sessenta'         ) , '60')
  assert.equal(parse('sessenta e um'    ) , '61')
  assert.equal(parse('sessenta e dois'  ) , '62')
  assert.equal(parse('sessenta e três'  ) , '63')
  assert.equal(parse('sessenta e quatro') , '64')
  assert.equal(parse('sessenta e cinco' ) , '65')
  assert.equal(parse('sessenta e seis'  ) , '66')
  assert.equal(parse('sessenta e sete'  ) , '67')
  assert.equal(parse('sessenta e oito'  ) , '68')
  assert.equal(parse('sessenta e nove'  ) , '69')

  assert.equal(parse('setenta'         ) , '70')
  assert.equal(parse('setenta e um'    ) , '71')
  assert.equal(parse('setenta e dois'  ) , '72')
  assert.equal(parse('setenta e três'  ) , '73')
  assert.equal(parse('setenta e quatro') , '74')
  assert.equal(parse('setenta e cinco' ) , '75')
  assert.equal(parse('setenta e seis'  ) , '76')
  assert.equal(parse('setenta e sete'  ) , '77')
  assert.equal(parse('setenta e oito'  ) , '78')
  assert.equal(parse('setenta e nove'  ) , '79')

  assert.equal(parse('oitenta'         ) , '80')
  assert.equal(parse('oitenta e um'    ) , '81')
  assert.equal(parse('oitenta e dois'  ) , '82')
  assert.equal(parse('oitenta e três'  ) , '83')
  assert.equal(parse('oitenta e quatro') , '84')
  assert.equal(parse('oitenta e cinco' ) , '85')
  assert.equal(parse('oitenta e seis'  ) , '86')
  assert.equal(parse('oitenta e sete'  ) , '87')
  assert.equal(parse('oitenta e oito'  ) , '88')
  assert.equal(parse('oitenta e nove'  ) , '89')

  assert.equal(parse('noventa'         ) , '90')
  assert.equal(parse('noventa e um'    ) , '91')
  assert.equal(parse('noventa e dois'  ) , '92')
  assert.equal(parse('noventa e três'  ) , '93')
  assert.equal(parse('noventa e quatro') , '94')
  assert.equal(parse('noventa e cinco' ) , '95')
  assert.equal(parse('noventa e seis'  ) , '96')
  assert.equal(parse('noventa e sete'  ) , '97')
  assert.equal(parse('noventa e oito'  ) , '98')
  assert.equal(parse('noventa e nove'  ) , '99')

})

