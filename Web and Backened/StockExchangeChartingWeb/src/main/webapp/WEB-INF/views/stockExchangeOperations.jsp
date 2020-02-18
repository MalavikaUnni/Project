
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page isELIgnored="false"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%@include file="header.jsp"%>
<h2 class="display-4 text-center">STOCKEXCHANGE</h2>
<hr>
	<c:url var="stockExchangeUrl" value="/stockExchange/save"></c:url>
	<form:form action="${stockExchangeUrl}" modelAttribute="stockExchange">
		<table class="table">
			
				<c:if test="${!empty stockExchange.exchangeName}">
				<tr>
					<td><form:label path="id">Id</form:label></td>
					<td><form:input path="id" readonly="true" disabled="true" /> <form:hidden
							path="id" /></td>
				</tr>
				</c:if>
			
			<tr>
				<td><form:label path="brief">Brief</form:label></td>
				<td><form:input path="brief" /></td>
			</tr>
			<tr>
				<td><form:label path="contractAddress">Contract Address</form:label></td>
				<td><form:input path="contractAddress" /></td>
			</tr>
			<tr>
				<td><form:label path="exchangeName">Exchange Name</form:label></td>
				<td><form:input path="exchangeName" /></td>
			</tr>
			<tr>
				<td><form:label path="remarks">Remarks</form:label></td>
				<td><form:input path="remarks" /></td>
			</tr>
			<tr>
				<td></td>
				<td><c:if test="${empty stockExchange.exchangeName}">
						<input type="Submit" value="Submit" />
					</c:if> <c:if test="${!empty stockExchange.exchangeName}">
						<input type="Submit" value="Update" />
					</c:if></td>
			</tr>

		</table>
	</form:form>

<h2 class="display-4 text-center">STOCKEXCHANGE DETAILS</h2>
<hr>
	<div>
		<table class="table">
			<tr>
				<th>Id</th>
				<th>Brief</th>
				<th>Contract Address</th>
				<th>Exchange Name</th>
				<th>Remarks</th>
				<th>Actions</th>

			</tr>
			<c:forEach var="stockexchange" items="${list}">
				<tr>
					<td>${stockexchange.id }
					</th>
					<td>${stockexchange.brief }</td>
					<td>${stockexchange.contractAddress }</td>
					<td>${stockexchange.exchangeName}</td>
					<td>${stockexchange.remarks}</td>
					<td><a
						href="<c:url value='/removestockExchange/${stockexchange.id }'/> ">Remove</a>
						<a
						href="<c:url value='/updatestockExchange/${stockexchange.id }'/> ">Update</a>
					</td>
				</tr>
			</c:forEach>
		</table>
	</div>
</body>
</html>