переименовывает ромы, картинки и добавляет к ним json файл с описанием

необходимо:

- ромы для конкретной платформы с именованием по правилам [no-intro](https://archive.org/download/no-intro_romsets/no-intro+romsets/)
- картинки из репозитория [libretro-thumnails](https://github.com/libretro/libretro-thumbnails) (они уже проименованы по no-intro)

как запустить:

- ромы для конкретной платформы выгрузить в папку in/roms (ромы должны быть распакованы из всех архивов, т.к. скрипт не умеет работать с архивами)

- картинки для этой же консоли в in/img и туда папки Named_Snaps и Named_Titles

- запустить `node index.js`

- полученный результат забрать из папки out

В результате для каждого рома будет лежать его картинки, сам ром и описание в json файле

полезные команды, которые могут пригодится

- распаковка всех архивов в директории `unzip '*.zip'`
- удаление всех zip архиво в директории `rm *.zip`