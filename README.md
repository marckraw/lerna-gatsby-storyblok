Generalnie monorepos wydaje się działać w netlify z ustawianiem Base na folder który jest do wydeployowania. Jednak wciąż możemy iść w tył do roota monorepos w celu wykonania skryptów.

Generalnie, importowanie shared-komponentów odbywa się za pomocą syntaksa importowania `file:../sciezka/do/pliku`

W takim wypadku, wszystko wydaje się działać poprawnie. Wcześniej oczywiście musi się wydarzyć prawdopodobnie kompilacja komponentów, ale to już załatwia babel, bądź możliwe że microbundle. Można by jeszcze sprobować czy da się używać tych rzeczy bez żadnego kompilowania jako `src` ale to może później.

Ważnym elementem jest dodawanie dependency robiąc
 `npm install ../common`  w katalogu z projektem do którego chcemy dependencje dodać. To nadpisze też `package-lock.json` i `package.json` z odpowiednimi wartościami.

Co jest jeszcze ważne to, repo ma być bez hoistowania prawdopodobnie. Czyli każdy folder ma swojego package-locka i swoje node_modules.