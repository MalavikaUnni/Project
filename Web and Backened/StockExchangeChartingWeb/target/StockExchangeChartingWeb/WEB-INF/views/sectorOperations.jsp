<%@include file="header.jsp" %>
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
<c:url var="sectorUrl" value="/sector/save"></c:url>
<form:form action="${sectorUrl}" modelAttribute="sector">
	<table>
	
		<c:if test="${!empty sector.name }">
	<tr>
	<td><form:label path="id">Id</form:label></td>
			<td><form:input path="id" readonly="true" disabled="true"/>
			<form:hidden path="id"/></td>
	</tr>
	</c:if>
		<tr>
			<td><form:label path="brief">Brief</form:label></td>
			<td><form:input path="brief"/></td>
		</tr>
		<tr>
			<td><form:label path="name">Name</form:label></td>
			<td><form:input path="name"/></td>
		</tr>
		<tr>
			<td></td>
			<td>
			<c:if test="${empty sector.name}">
			<input type="Submit" value="Register"/>
			</c:if>
			<c:if test="${!empty sector.name}">
			<input type="Submit" value="Update"/>
			</c:if>
			
			</td>
		</tr>
		
	</table>
</form:form>

<br>
<hr>

<div>
<h2>SECTOR DETAILS</h2>
<hr>

 <table border="1">
 <tr>
<th>Id</th>
<th>Brief</th>
<th>Name</th>
<th>Actions</th>

</tr>
<c:forEach var="sector" items="${sectorlist}"> 
<tr>
<td>${sector.id }</td>
<td>${sector.brief}</td>
<td>${sector.name }</td>
<td><a href= "<c:url value='/removesector/${sector.id }'/> ">Remove</a> |
	<a href= "<c:url value='/updatesector/${sector.id }'/> ">Update</a>
</td>

</tr>
</c:forEach>
</table>

</div>
</body>
</html>