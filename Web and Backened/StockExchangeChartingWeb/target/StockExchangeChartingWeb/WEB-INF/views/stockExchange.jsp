<%@include file="header.jsp" %>
<%@ page isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<body>
<h2>Hello World!</h2>
<hr>
<%-- <ol>
<c:forEach var="name" items="${list}"> 
<li> <h3>${name}</h3></li>
</c:forEach>
</ol>
 --%>
 <table border="1">
 <tr>
<th>Id</th>
<th>Brief</th>
<th>Contract Address</th>
<th>Exchange Name</th>
<th>Remarks</th>

</tr>
<c:forEach var="stockexchange" items="${stockExchangelist}"> 
<tr>
<td>${stockexchange.id }</th>
<td>${stockexchange.brief }</td>
<td>${stockexchange.contractAddress }</td>
<td>${stockexchange.exchangeName}</td>
<td>${stockexchange.remarks}</td>
</tr>
</c:forEach>
</table>
 
 
<hr>
<%-- ${message} --%>

</body>
</html>
