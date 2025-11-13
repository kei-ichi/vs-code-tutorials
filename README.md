# VSCode tutorials

## 1. Basic UI

VScode を起動してください。

初期状態は以下の画面の通りになります。

![](./img/01-basic-ui/basic-ui-01.png)

「Open Folder」をクリックして、開きたいフォルダーを選択してください。

初めて開くフォルダーやファイルだと、以下のような画面が表示される

![](./img/01-basic-ui/basic-ui-02.png)

「Trust the authors....」のチェックボックスをチェックしないと、
「制限モード」で対象のファイルやフォルダーを開くので、要注意ください

![](./img/01-basic-ui/basic-ui-03.png)

VS Code のユーザーインターフェースは 6 つの主要なエリアに分かれています:

- エディタ - ファイルを編集するメインエリアです。縦横に並べて、好きなだけ多くのエディタを開くことができます。
- プライマリサイドバー - プロジェクトでの作業中に役立つエクスプローラーなどのさまざまなビューが含まれています。
- セカンダリサイドバー - プライマリサイドバーの反対側にあります。デフォルトでは、チャットビューが含まれています。プライマリサイドバーからセカンダリサイドバーにビューをドラッグアンドドロップして移動できます。
- ステータスバー - 開いているプロジェクトと編集中のファイルに関する情報です。
- アクティビティバー - 最も左側に配置されています。ビュー間の切り替えを可能にし、Git が有効な場合の送信変更の数など、追加のコンテキスト固有のインジケータを提供します。アクティビティバーの位置は変更できます。
- パネル - エディタ領域の下にある追加スペースです。デフォルトでは、出力、デバッグ情報、エラーと警告、および統合ターミナルが含まれています。パネルは、より多くの垂直スペースを確保するために左または右に移動することもできます。

![](./img/01-basic-ui/basic-ui-04.png)

利用しないサイドバー（右）は以下のような閉じることができる。

![](./img/01-basic-ui/basic-ui-05.png)

通常の利用する際は以下のような画面になる。

![](./img/01-basic-ui/basic-ui-06.png)

ターミナルも開くと以下のような画面が面になる。

これで VScode のすべての UI になる。

![](./img/01-basic-ui/basic-ui-07.png)

複数のファイルを同時に開きたい場合は「サイドバイサイド」を活用する。

サイドバイサイド編集
縦横に並べて、好きなだけ多くのエディタを開くことができます。既にエディタを開いている場合、横に別のエディタを開く方法は複数あります:

- Alt キーを押しながら、エクスプローラービューでファイルを選択します。
- Ctrl+\キーでアクティブなエディタを 2 つに分割します。
- エクスプローラーのコンテキストメニューでファイル上の「横に開く」(Ctrl+Enter)を選択します。
- エディタの右上にある分割エディタボタンを選択します。
- エディタ領域の任意の側にファイルをドラッグアンドドロップします。ドラッグ中に Ctrl(macOS では Option)キーを押したままにすると、タブを移動する代わりにコピーします。
- クイックオープン(Ctrl+P)のファイルリストで Ctrl+Enter キーを押します。

![](./img/01-basic-ui/basic-ui-08.png)

マウスで操作する際は、対象のエディタータブに右クリックして、「Split & Move」を選択し、配置場所を選択する。

> 単純に右側に分割して表示したい場合は「Split Right」をクリックしてください

![](./img/01-basic-ui/basic-ui-09.png)

エディタグループ
エディタを分割する(分割エディタまたは横に開くコマンドを使用)と、新しいエディタ領域(編集グループ)が作成され、アイテムのグループを保持できます。縦横に並べて、好きなだけ多くのエディタグループを開くことができます。

これらは、エクスプローラービューの上部にある「開いているエディタ」セクションで明確に確認できます(エクスプローラービューで...>開いているエディタを切り替え)。

タブエディタグループ

ワークベンチ上でエディタグループをドラッグアンドドロップしたり、グループ間で個別のタブを移動したり、グループ全体を素早く閉じる(すべて閉じる)ことができます。

![](./img/01-basic-ui/basic-ui-10.png)

![](./img/01-basic-ui/basic-ui-11.png)

フローティングウィンドウ
エディタ、ターミナル、または特定のビューを独自のフローティングウィンドウに移動できます。これは、マルチモニター環境があり、別のモニターでファイルを開いたままにしておきたい場合に便利です。

VS Code ウィンドウとフローティングウィンドウで開かれた CSV ファイルを表示する OS デスクトップのスクリーンショット。

現在の VS Code ウィンドウからエディタタブをドラッグして、フローティングウィンドウで開きます。または、エディタタブのコンテキストオプションから「新しいウィンドウに移動」または「新しいウィンドウにコピー」を使用します。

フローティングウィンドウを画面の最前面に固定するには、タイトルバーから「常に最前面に表示」オプション(ピンアイコン)を選択します。

![](./img/01-basic-ui/basic-ui-12.png)

![](./img/01-basic-ui/basic-ui-13.png)

同じくターミナルもフローティングウィンドウで開ける

![](./img/01-basic-ui/basic-ui-14.png)

![](./img/01-basic-ui/basic-ui-15.png)

ミニマップ
ミニマップ(コードアウトライン)は、ソースコードの概要を表示し、素早いナビゲーションとコード理解に役立ちます。ファイルのミニマップはエディタの右側に表示されます。影付きの領域を選択またはドラッグして、ファイル内の異なるセクションに素早くジャンプできます。

![](./img/01-basic-ui/basic-ui-16.png)

スティッキースクロール
スティッキースクロールは、現在表示されているネストされたスコープの開始行をエディタの上部に表示します。ファイル内のどこにいるかを示すことでナビゲーションを容易にし、現在のスコープの先頭に素早く戻ることができます。

![](./img/01-basic-ui/basic-ui-17.png)

コードブロックを縮小場合は対象のブロックをクリックすると、縮小することができる。

![](./img/01-basic-ui/basic-ui-18.png)

![](./img/01-basic-ui/basic-ui-19.png)

## 2. Install Extensions

![](./img/02-install-extensions/install-extensions-01.png)

![](./img/02-install-extensions/install-extensions-02.png)

![](./img/02-install-extensions/install-extensions-03.png)

![](./img/02-install-extensions/install-extensions-04.png)

![](./img/02-install-extensions/install-extensions-05.png)

![](./img/02-install-extensions/install-extensions-06.png)

![](./img/02-install-extensions/install-extensions-07.png)

![](./img/02-install-extensions/install-extensions-08.png)

![](./img/02-install-extensions/install-extensions-09.png)

![](./img/02-install-extensions/install-extensions-10.png)

![](./img/02-install-extensions/install-extensions-11.png)

![](./img/02-install-extensions/install-extensions-12.png)

![](./img/02-install-extensions/install-extensions-13.png)

![](./img/02-install-extensions/install-extensions-14.png)

![](./img/02-install-extensions/install-extensions-15.png)

![](./img/02-install-extensions/install-extensions-16.png)

![](./img/02-install-extensions/install-extensions-17.png)

![](./img/02-install-extensions/install-extensions-18.png)

![](./img/02-install-extensions/install-extensions-19.png)

## 3. Settings

![](./img/03-settings/settings-01.png)

![](./img/03-settings/settings-02.png)

![](./img/03-settings/settings-03.png)

![](./img/03-settings/settings-04.png)

![](./img/03-settings/settings-05.png)

![](./img/03-settings/settings-06.png)

![](./img/03-settings/settings-07.png)

![](./img/03-settings/settings-08.png)

![](./img/03-settings/settings-09.png)

![](./img/03-settings/settings-10.png)

![](./img/03-settings/settings-11.png)

![](./img/03-settings/settings-12.png)

![](./img/03-settings/settings-13.png)

![](./img/03-settings/settings-14.png)

![](./img/03-settings/settings-15.png)

![](./img/03-settings/settings-16.png)

![](./img/03-settings/settings-17.png)

![](./img/03-settings/settings-18.png)

![](./img/03-settings/settings-19.png)

![](./img/03-settings/settings-20.png)

![](./img/03-settings/settings-21.png)

![](./img/03-settings/settings-22.png)

![](./img/03-settings/settings-23.png)

## 4. WSL Access

![](./img/04-wsl-access/wsl-access-01.png)

![](./img/04-wsl-access/wsl-access-02.png)

![](./img/04-wsl-access/wsl-access-03.png)

![](./img/04-wsl-access/wsl-access-04.png)

![](./img/04-wsl-access/wsl-access-05.png)

![](./img/04-wsl-access/wsl-access-06.png)

![](./img/04-wsl-access/wsl-access-07.png)

![](./img/04-wsl-access/wsl-access-08.png)

![](./img/04-wsl-access/wsl-access-09.png)

![](./img/04-wsl-access/wsl-access-10.png)

![](./img/04-wsl-access/wsl-access-11.png)

![](./img/04-wsl-access/wsl-access-12.png)

![](./img/04-wsl-access/wsl-access-13.png)

![](./img/04-wsl-access/wsl-access-14.png)

![](./img/04-wsl-access/wsl-access-15.png)

![](./img/04-wsl-access/wsl-access-16.png)

![](./img/04-wsl-access/wsl-access-17.png)

![](./img/04-wsl-access/wsl-access-18.png)

![](./img/04-wsl-access/wsl-access-19.png)

![](./img/04-wsl-access/wsl-access-20.png)

![](./img/04-wsl-access/wsl-access-21.png)

![](./img/04-wsl-access/wsl-access-22.png)

![](./img/04-wsl-access/wsl-access-23.png)

![](./img/04-wsl-access/wsl-access-24.png)

![](./img/04-wsl-access/wsl-access-25.png)

![](./img/04-wsl-access/wsl-access-26.png)

## 5. SSH access

![](./img/05-remote-access/remote-access-01.png)

![](./img/05-remote-access/remote-access-02.png)

![](./img/05-remote-access/remote-access-03.png)

![](./img/05-remote-access/remote-access-04.png)

![](./img/05-remote-access/remote-access-05.png)

![](./img/05-remote-access/remote-access-06.png)

![](./img/05-remote-access/remote-access-07.png)

![](./img/05-remote-access/remote-access-08.png)

![](./img/05-remote-access/remote-access-09.png)

![](./img/05-remote-access/remote-access-10.png)

![](./img/05-remote-access/remote-access-11.png)

![](./img/05-remote-access/remote-access-12.png)

![](./img/05-remote-access/remote-access-13.png)

![](./img/05-remote-access/remote-access-14.png)

![](./img/05-remote-access/remote-access-15.png)

![](./img/05-remote-access/remote-access-16.png)

![](./img/05-remote-access/remote-access-17.png)

![](./img/05-remote-access/remote-access-18.png)

![](./img/05-remote-access/remote-access-19.png)

![](./img/05-remote-access/remote-access-20.png)

![](./img/05-remote-access/remote-access-21.png)

![](./img/05-remote-access/remote-access-22.png)

![](./img/05-remote-access/remote-access-23.png)

![](./img/05-remote-access/remote-access-24.png)
