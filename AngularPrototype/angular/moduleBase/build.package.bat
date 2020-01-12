call ng build jngcontrols-common
call ng build jngcontrols-bootstrap3
call ng build jngcontrols-bootstrap4

echo .
echo "Edit package.json Files in Dist Folder and press a key"
pause

cd dist/jngcontrols-common
call npm pack

cd ../..

cd dist/jngcontrols-bootstrap3
call npm pack

cd ../..

cd dist/jngcontrols-bootstrap4
call npm pack

cd ../..


echo "Relase done ..."

cd dist/jngcontrols-common
call npm publish

cd ../..

cd dist/jngcontrols-bootstrap3
call npm publish

cd ../..

cd dist/jngcontrols-bootstrap4
call npm publish

cd ../..


echo "Publish done ..."
pause
