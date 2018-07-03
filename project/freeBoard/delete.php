<?php 
	
	require_once("./dbconfig.php");

	// $_GET['bno']이 있어야만 글삭제가 가능함.
	if(isset($_GET['bno'])){
		$bNo = $_GET['bno'];
	}

 ?>

 <!DOCTYPE html>
 <html>
 <head>
 	<meta charset="utf-8">
 	<title>자유게시판</title>
 </head>
 <body>
 	<article class="boardArticle">
 		<h3>자유게시판 글 삭제</h3>
 		<?
 			if(isset($bNo)){
 				$sql = 'select count(b_no) as cnt from board_free where b_no='.$bNo;
 				$result = $db->query($sql);
 				$row = $result->fetch_assoc();
 				if(empty($row['cnt'])){
 		?>
 		<script type="text/javascript">
 			alert('글이 존재하지 않습니다.');
 			history.back();
 		</script>
 		<?
 			exit;
 				}
 				$sql = 'select b_title from board_free where b_no'.$bNo;
 				$result = $db->query($sql);
 				$row = $result->fetch_assoc();
 		?>
 		<div id="boardDelete">
 			<form action="./freeBoard/delete_update.php" method="post">
 				<input type="hidden" name="bno" value="<?echo $bNo?>">
 				<table>
 					<caption class="readHide">자유게시판 글 삭제</caption>
 					<thead>
 						<tr>
 							<th scope="col" colspan="2">글삭제</th>
 						</tr>
 					</thead>
 					<tbody>
 						<tr>
 							<th scope="row">글 제목</th>
 							<td><? echo $row['b_title'] ?></td>
 						</tr>
 						<tr>
 							<th scope="row"><label for="bPassword">비밀번호</label></th>
 							<td><input type="password" name="bPassword" id="bPassword"></td>
 						</tr>
 					</tbody>
 				</table>

 				<div class="btnSet">
 					<button type="submit" class="btnSubmit btn">삭제</button>
 					<a href="./freeBoard/index.php" class="btnList btn">목록</a>
 				</div>
 			</form>
 		</div>
 		<?
 			//$bno이 없다면 삭제 실패
 			}else{
 		?>
 			<script type="text/javascript">
 				alert('정상적인 경로를 이용해주세요.');
 				history.back();
 			</script>
 		<?
 			exit;
 			}
 		?>
 	</article>

 </body>
 </html>