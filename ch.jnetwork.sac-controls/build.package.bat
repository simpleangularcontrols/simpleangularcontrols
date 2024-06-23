call ng build sac-common
call ng build sac-bootstrap3
call ng build sac-bootstrap4

echo .
echo "Edit package.json Files in Dist Folder and press a key"
pause

cd dist/sac-common
call npm pack

cd ../..

cd dist/sac-bootstrap3
call npm pack

cd ../..

cd dist/sac-bootstrap4
call npm pack

cd ../..


echo "Relase done ..."

cd dist/sac-common
call npm publish

cd ../..

cd dist/sac-bootstrap3
call npm publish

cd ../..

cd dist/sac-bootstrap4
call npm publish

cd ../..


echo "Publish done ..."
pause
