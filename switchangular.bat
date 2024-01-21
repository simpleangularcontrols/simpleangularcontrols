cd ch.jnetwork.sac-controls
rd node_modules /S /Q
rd ".angular" /S /Q
rd "projects\sac-bootstrap3\.angular" /S /Q
rd "projects\sac-bootstrap4\.angular" /S /Q
rd "projects\sac-bootstrap5\.angular" /S /Q

del package-lock.json

npm i
REM pnpm install

cd ..