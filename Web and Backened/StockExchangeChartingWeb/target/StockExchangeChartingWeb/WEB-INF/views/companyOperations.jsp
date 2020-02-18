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
<c:url var="companyUrl" value="/company/save"></c:url>
<form:form action="${companyUrl}" modelAttribute="company">
	<table>
		<c:if test="${!empty company.name }">
		<tr>
	<td><form:label path="id">Id</form:label></td>
			<td><form:input path="id" readonly="true" disabled="true"/>
			<form:hidden path="id"/></td>
	</tr>
	</c:if>
		
		<tr>
			<td><form:label path="name">Company Name</form:label></td>
			<td><form:input path="name"/></td>
		</tr>
		<tr>
			<td><form:label path="sector">Sector</form:label></td>
			<td><form:input path="sector"/></td>
		</tr>
		<tr>
			<td><form:label path="ceoName">Ceo Name</form:label></td>
			<td><form:input path="ceoName"/></td>
		</tr>
		<tr>
			<td><form:label path="turnOver">TurnOver</form:label></td>
			<td><form:input path="turnOver"/></td>
		</tr>

		<tr>
			<td></td>
			<td>
			<c:if test="${empty company.name}">
			<input type="Submit" value="Register"/>
			</c:if>
			<c:if test="${!empty company.name}">
			<input type="Submit" value="Update"/>
			</c:if>
			
			</td>
		</tr>
		
	</table>
</form:form>

<hr>
<div>
<h2> COMPANY DETAILS</h2>

 <table border="1">
 <tr>
<th>Id</th>
<th>Name</th>
<th>Sector</th>
<th>CEOName</th>
<th>TurnOver</th>
<th>Actions</th>

</tr>
<c:forEach var="company" items="${companylist}"> 
<tr>
<td>${company.id }</th>
<td>${company.name}</td>
<td>${company.sector }</td>
<td>${company.ceoName }</td>
<td>${company.turnOver }</td>
<td><a href= "<c:url value='/removecompany/${company.id }'/> ">Delete</a> |
	<a href= "<c:url value='/updatecompany/${company.id }'/> ">Update</a>
</td>

</tr>
</c:forEach>
</table>
</div>
</body>
</html>