<?php
session_start();
include("../../../conexion/conexion.php");
include("../../../conexion/funciones.php");
require_once('../../../../libs/thumbs/ThumbLib.inc.php');

//DECLARACION DE VARIABLES
$idnoticia=$_REQUEST["id"];
$titulo=$_POST["titulo"];
$contenido=$_POST["contenido"];

//FECHA PUBLICACION
$fecha_pub=date("Y-m-d H:i:s");

//GUARDAR DATOS
mysql_query("UPDATE ".$tabla_suf."_directorio_funcionarios SET titulo='".htmlspecialchars($titulo)."', 
contenido='$contenido', 
dato_usuario='$usuario_user', 
fecha_publicacion='$fecha_pub' WHERE id=$idnoticia;", $conexion);
	
if (mysql_errno()!=0){
	//echo "error al insertar los datos ". mysql_errno() . " - ". mysql_error();
	mysql_close($conexion);
	header("Location:listar.php?mensaje=5");
} else {
	//echo "error al insertar los datos ". mysql_errno() . " - ". mysql_error();
	mysql_close($conexion);
	header("Location:listar.php?mensaje=2");
}

?>