# V.1.1.0

## Breaking Changes

* Tag "\<ngFormular\>" muss durch Tag "\<form\>" oder Tag "\<div ngForm\>\</div\>" ersetzt werden.
  Grund ist, dass die Kompatibilität zu Reactive Forms nicht gewährleistet wurde und das bei Template Forms
  keine Gruppierung der Formulare durch die Direktive "ngModelGroup" möglich war.
