# prisma sandbox

## prisma clientの自動生成

```$ npx prisma generate```  

prisma schema を変更した際、Clientにも反映させるため、このコマンドを実行する。  

## SQLite DBの初期化

```$ npx prisma db seed```  

初期化データの変更は、```seed.ts``` を編集する。