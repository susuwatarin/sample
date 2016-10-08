$(function(){

$("#modal-open").click( function(){
   $("#modal,#modal-background").fadeIn("slow");
});

$("#modal-close,#modal-background").click(function(){
   $("#modal,#modal-background").fadeOut("slow");

});
});

/*参考プログラム*/
/*$(window).resize(centeringModalSyncer) ;
	
	//最初の画面でのセンタリング
	centeringModalSyncer()

	//センタリングを実行する関数
	function centeringModalSyncer() {

		//画面(ウィンドウ)の幅、高さを取得
		var w = $( window ).width() ;
		var h = $( window ).height() ;

		// コンテンツ(#modal-content)の幅、高さを取得
		// jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。

		var cw = $( "#modal" ).outerWidth();
		var ch = $( "#modal" ).outerHeight();

		//センタリングを実行する
		$( "#modal" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;

}*/




