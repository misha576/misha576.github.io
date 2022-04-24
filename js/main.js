import uch from './uch.js'

const uch = [
new uch('bvz','bvz','bvz')
]

const $uchbody = document.getElementsDyId('uch-body')

function newuchTR(uch) {
 const $uchTR = document.createElement('tr'),
       $nameTD = document.createElement('th'),
       $surenameTD = document.createElement('th'),
       $reasonTD = document.createElement('th')

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