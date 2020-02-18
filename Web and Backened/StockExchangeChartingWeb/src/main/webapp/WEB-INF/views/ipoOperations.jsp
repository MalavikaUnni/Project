
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ page isELIgnored="false"  %>
    <%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%@include file="header.jsp" %>
<div>
<h2 class="display-4 text-center">IPO</h2>
</div>
<hr>
<div class="jumbotron" >
<c:url var="ipoUrl" value="/ipo/save"></c:url>
<form:form action="${ipoUrl}" modelAttribute="ipo">
	<table class="table">
		<c:if test="${!empty ipo.companyName }">
	<tr>
	<td><form:label path="id">Id</form:label></td>
			<td><form:input path="id" readonly="true" disabled="true"/>
			<form:hidden path="id"/></td>
	</tr>
	</c:if>
	
	
		<tr>
			<td><form:label path="companyName">Company Name</form:label></td>
			<td><form:input path="companyName"/></td>
		</tr>
		<tr>
			<td><form:label path="pricePerShare">PricePerShare</form:label></td>
			<td><form:input path="pricePerShare"/></td>
		</tr>
	
		<tr>
			<td><form:label path="remarks">Remarks</form:label></td>
			<td><form:input path="remarks"/></td>
		</tr>
		<tr>
			<td><form:label path="stockExchange">StockExchange</form:label></td>
			<td><form:input path="stockExchange"/></td>
		</tr>
	  	<tr>
			<td><form:label path="totalStocks">TotalStocks</form:label></td>
			<td><form:input path="totalStocks"/></td>
		</tr>

		<tr>
			<td></td>
			<td>
			<c:if test="${empty ipo.companyName}">
			<input type="Submit" value="Register"/>
			</c:if>
			<c:if test="${!empty ipo.companyName}">
			<input type="Submit" value="Update"/>
			</c:if>
			
			</td>
		</tr>
		
	</table>
</form:form>
</div>
<br/>
<hr>
<div>
<h2 class="display-4 text-center">IPO DETAILS</h2>
<div class=jumbotron"></div>
<table class="table">
 <tr>
<th>Id</th>
<th>Company Name</th>
<th>PricePerSahre</th>
<th>Remarks</th>
<th>StockExchange</th>
<th>TotalStocks</th>
<th>Actions</th>
</tr>
<c:forEach var="ipo" items="${ipolist}"> 
<tr>
<td>${ipo.id }</th>
<td>${ipo.companyName }</td>
<td>${ipo.pricePerShare}</td>
<td>${ipo.remarks }</td>
<td>${ipo.stockExchange }</td>
<td>${ipo.totalStocks }</td>
<td><a href= "<c:url value='/removeipo/${ipo.id }'/> ">Delete</a> |
	<a href= "<c:url value='/updateipo/${ipo.id }'/> ">Update</a>

</td>
</tr>
</c:forEach>
</table>
</div>
</body>
</html>