create or alter view OtpVwContactAgeDays
as
select Id as OtpId, Name as OtpName, BirthDate as OtpBirthDate, Id as OtpContactId,
datediff(day, BirthDate, getdate()) as OtpAgeDays
from Contact