
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
<h2 class="display-4 text-center">USERS</h2>
<hr>
<c:url var="userUrl" value="/user/save"></c:url>
<form:form action="${userUrl}" modelAttribute="user">
	<table class="table">
	<c:if test="${!empty user.username }">
	<tr>
	<td><form:label path="id">Id</form:label></td>
			<td><form:input path="id" readonly="true" disabled="true"/>
			<form:hidden path="id"/></td>
	</tr>
	</c:if>
		<tr>
			<td><form:label path="email">email</form:label></td>
			<td><form:input path="email"/></td>
		</tr>
		<tr>
			<td><form:label path="name">Name</form:label></td>
			<td><form:input path="name"/></td>
		</tr>
		<tr>
			<td><form:label path="password">Password</form:label></td>
			<td><form:input path="password"/></td>
		</tr>
		<tr>
			<td><form:label path="phone">Phone</form:label></td>
			<td><form:input path="phone"/></td>
		</tr>
	  	<tr>
			<td><form:label path="username">Username</form:label></td>
			<td><form:input path="username"/></td>
		</tr>

		<tr>
			<td></td>
			<td>
			<c:if test="${empty user.username}">
			<input type="Submit" value="Register"/>
			</c:if>
			<c:if test="${!empty user.username}">
			<input type="Submit" value="Update"/>
			</c:if>
			
			</td>
		</tr>
		
	</table>
	
	<br/>
	<br/>
	<div>
	<h2 class="display-4 text-center"> USER DETAILS</h2>
	<hr>
		<table class="table">
 <tr>
<th>Id</th>
<th>Email</th>
<th>Name</th>
<th>Password</th>
<th>Phone</th>
<th>User Name</th>
<th>Actions</th>
</tr>
<c:forEach var="register" items="${list}"> 
<tr>
<td>${register.id }</th>
<td>${register.email }</td>
<td>${register.name }</td>
<td>${register.password }</td>
<td>${register.phone }</td>
<td>${register.username }</td>
<td><a href= "<c:url value='/remove/${register.id }'/> ">Remove</a>   |   
    <a href= "<c:url value='/update/${register.id }'/> ">Update</a>
</td>
</tr>
</c:forEach>
</table>
	
	</div>
</form:form>
</body>
</html>