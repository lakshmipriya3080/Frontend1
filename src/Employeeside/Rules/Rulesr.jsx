import React from 'react';
import './rules.css';
import UserSidebar from '../../components/UserSidebar';


const Rulesr = () => {
  return (
    <div className='grid-container'>
    
    <UserSidebar/>  
   
     <div align='center'>
    <div >
        <div >
      <h3>Company Rules and Regulations</h3>
    <main >
      <section  className='section'>
        <h2>Section 1:Code of Conduct</h2>
        <p>Firstly, the company expects formal and acceptable behaviors from employees. 
            The company’s prime motive is to attract customers through the exemplary conduct of the employees.
           </p>
      </section>

      <section>
        <h2>Section 2:Anti-Discrimination and Harassment Policies:</h2>
        <p>The company will not allow employees to work under the influence of alcoholic beverages during work time. 
            Our Company does not inspire you to drink alcohol or prevent you from drinking alcohol;
             however, our Company suggests you not drink alcohol when you are on duty.</p>
      </section>
      <section >
        <h2>Section 3:Health and Safety Guidelines:</h2>
        <p>Additionally, employees must need to wear a face mask while working in an office. 
            They have the responsibility to ensure safety and a healthy working environment.</p>
      </section>
      <section >
        <h2>Section 4:IT and Security Policies:</h2>
        <p>Moreover, employees are liable to protect the company’s belongings for office purposes. 
            They will be responsible for breaking any official equipment such as a computer, printer, scanner, camera, etc. 
            Employees can use the official equipment only for official purposes.</p>
      </section>
      <section >
        <h2>Section 2:Break Related:</h2>
        <p>Employees should have meals during break times. The Company will not allow extra meal time, so employees must utilize the break time wisely.
            Our company is vigilant in following the employee’s ethical principles. 
            The company will fire employees who indulge in corruption and bribery without notifying them.</p>
      </section>
      <section >
        <h2>Section 2:Record Maintaining:</h2>
        <p>Our company is aware of maintaining records; therefore, every employee must protect documents.
             The office will not accept any argument without proper evidence. 
            Hence, employees should preserve official documents for future demand.</p>
      </section>
    </main>
      <p>&copy; 2024 TalentHRM. All rights reserved.</p>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Rulesr;