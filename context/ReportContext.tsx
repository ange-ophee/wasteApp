import React, { createContext, useState } from 'react';

// Create a context
export const ReportContext = createContext(null);

export const ReportProvider = ({ children }) => {
  const [reports, setReports] = useState([]);

  const addReport = (report) => {
    setReports((prevReports) => [...prevReports, report]);
  };

  return (
    <ReportContext.Provider value={{ reports, addReport }}>
      {children}
    </ReportContext.Provider>
  );
};