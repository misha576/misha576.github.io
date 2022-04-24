import uch from './uch.js'

const 'uch' = [
new uch('td','td','td')

]

const $uchbody = document.getElementsDyId('uch-body')

function newuchTR(uch) {
 const $uchTR = document.createElement('tr'),
       $nameTD = document.createElement('td'),
       $surenameTD = document.createElement('td'),
       $reasonTD = document.createElement('td')

       $nameTD.textContent = uch.getuch()
       $surenameTD.textContent = uch.getuch()
       $reasonTD.textContent = uch.getuch()



 $uchTR.append($nameTD)
 $uchTR.append($surenameTD)
 $uchTR.append($reasonTD)

 return $uchTR;

}

function render (){
  const uchCopy = [...uch]

  for (const uch of uchCopy){
  $uchbody.append(newuchTR(uch))
  }
  
}
render()