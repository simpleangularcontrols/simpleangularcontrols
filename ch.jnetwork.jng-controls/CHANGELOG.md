# V.1.1.0

## Breaking Changes

* Tag "\<ngFormular\>" muss durch Tag "\<form\>" oder Tag "\<div ngForm\>\</div\>" ersetzt werden.
  Grund ist, dass die Kompatibilität zu Reactive Forms nicht gewährleistet wurde und das bei Template Forms
  keine Gruppierung der Formulare durch die Direktive "ngModelGroup" möglich war.
  Wenn in einer Kompontene über @ViewChild auf die NgFormular Komponente zugegriffen wird, muss das Attribute auf dem Form auf folgenden Code
  angepasst werden '#myForm="NgFormular"'.


* Das Property "form" in NgFormular ist neu Private. Auf "form" kann über die Methode "getForm()" zugegriffen werden.

# V.1.1.1

## Breaking Changes

* Beim Tag "\<ngGridButton\>" wurde das Property "iconstyle" in 2 Properties "iconstyle" und "icon" aufgeteilt. Werden die Standard Icons verwendet,
  muss das Property von "inconstyle" auf "icon" umbenannt werden. Werden Custom Icons verwendet, muss das Sprite Set im Property "iconstyle" angegeben werden und
  das Icon im Property "icon".


