<?php session_start();?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<LINK REL="SHORTCUT ICON" href="imagens/logo.gif"><title>GZ Sistemas</title>
<script type="text/javascript" src="funcoes.js"></script>

<link rel="stylesheet" href="css.css" type="text/css"/>

<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<meta name="resource-type" content="document"/>
<meta http-equiv="Expires" content="-1"/>
<meta http-equiv="pragma" content="no-cache"/>
<meta http-equiv="expires" content="Mon, 06 Jan 1990 00:00:01 GMT"/>
<meta name="revisit-after" content="10"/>
<meta name="classification" content="Site Venda de Sistemas"/>
<meta name="description" content="Software de automa��o comercial, frente de loja e retaguarda.TEF. Consultoria para supermercados. Equipamentos em geral. Computadores, no-breaks, impressoras fiscais"/>
<meta name="keywords" content="Sistema comercial, software, tef, ecf, mfd, frente de loja, retaguarda, consultoria, computador, impressoras fiscais, no-breaks, leitores, perif�ricos, equipamentos de informatica, microterminal, programas, ti, tecnologia de informa��o."/>
<meta name="robots" content="ALL"/>
<meta name="googlebot" content="INDEX, FOLLOW"/>
<meta name="distribution" content="Global"/>
<meta name="rating" content="General"/>
<meta name="copyright" content="Copyright 2006 - L�gica Digital"/>
<meta name="author" content="L�gica Digital"/>
<meta http-equiv="reply-to" content="root@gznet.com.br"/>
<meta http-equiv="Content-Language" content="pt-BR"/>
<meta name="target_country" content="br"/>
<meta name="country" content="Brazil"/>

<script language="JavaScript">
function mostra(campo){
    document.getElementById(campo).style.display='' ;
}
function oculta(campo){
    document.getElementById(campo).style.display='none' ;
}
</script>
</head>

<body>

<!--inicio da tabela geral-->
<table width="100%" border="0" cellspacing="0" cellpadding="0" class="bg_fundo_tabela">
  <tr>
    <td align="center" valign="top">
      <table width="775" border="0" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
        <tr>
          <td align="center" valign="top">
            <?php include("inc_topo.php"); ?>
            <table width="775" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td width="775" height="586" align="center" valign="top"> <br>
                  <table width="90%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <div class="texto_geral"><p align="left" style="padding-left:25px;font: bold 15px Tahoma;">
                      <img src="imagens/img_seta.jpg"> Servi�os
                      </p></div><br/>
                    </tr>
                    <tr>
                      <td height="50">
                        <div class="texto_geral">Clique e veja os servi&ccedil;os
                          oferecidos pela GZ Sistemas
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <br>
                        <div class="texto_geral">
                        <p><img src="imagens/img_seta.jpg"><strong>
                           <a href="implantacao.php"> <u>Implanta��o</u></a></strong>
                        </p><br>
                          <p><img src="imagens/img_seta.jpg"><strong>
                           <a href="consultoria.php"> <u>Consultoria</u></a></strong>
                        </p><br>
                        <p><img src="imagens/img_seta.jpg"><strong>
                           <a href="http://www.gzsistemas.com.br/treinamento/index.php"> <u>Treinamento</u></a></strong>
                        </p><br>
                        <p><img src="imagens/img_seta.jpg"><strong>
                           <a href="service.php"> <u>Service Desk e Assist�ncia T�cnica</u></a></strong>
                        </p><br>
                        <!-- 
                        <p><img src="imagens/img_seta.jpg"><strong>
                           <a href="assistencia_tecnica.php"> <u>Assist�ncia T�cnica</u></a></strong>
                        </p><br>
                        -->
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <?php include("inc_rodape.php"); ?>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

</body>
</html>
