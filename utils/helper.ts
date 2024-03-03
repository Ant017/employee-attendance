

const Helper =()=>{
    const formatDateToMonth = (dateString: string): string => {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = { month: 'long' };
        const monthName: string = new Intl.DateTimeFormat('en-US', options).format(date);
        return monthName;
      };

      return {
        formatDateToMonth
      }
}

export default Helper;
