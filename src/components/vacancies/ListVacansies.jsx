import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import ReactHover from 'react-hover';
import { setCountItemsOnPage } from '../../redux/actions/utils';
import { ModalVacancy } from './ModalVacancy';

const Wrapper = styled.div`
  max-width: calc(100vw - 298px);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  /* Отстпу справа - размер sidebar */
  padding-right: 250px;
  margin-left: 16px;
`;

const List = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  padding: 0 32px;
  margin: 0 0 10px 0;
`;

const NavLinkWrapper = styled.div`
  display: flex;
  align-items: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const SubLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  width: 260px;
`;

const CompanyLink = styled.a`
  color: #6193e8;
  font-size: 14px;
  font-weight: 500;
  @media (max-width: 1400px) {
    font-size: 12px;
  }
`;

const SalaryText = styled.span`
  color: #86888c;
  font-size: 14px;
  font-weight: 500;
  @media (max-width: 1400px) {
    font-size: 12px;
  }
`;

const Item = styled.li`
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e0d6d6;
  cursor: pointer;
  box-sizing: border-box;
  transition: 0.7s;

  &:hover {
    background-color: #e4e6ef;
  }
  @media (max-width: 1400px) {
    padding: 4px;
    height: 40px;
  }
`;
const Title = styled.a`
  margin: 6px 0 0 6px;
  color: #000;
  font-size: 20px;
  font-weight: 500;
  transition: 0.7s;

  &:hover {
    color: #1890ff;
  }

  @media (max-width: 1400px) {
    font-size: 14px;
  }
`;

export const ListVacansies = () => {
  const refList = useRef();
  const refItem = useRef();
  const [itemHeight, setItemHeight] = useState(40);
  const dispatch = useDispatch();

  const { fullVacancies } = useSelector((state) => state.reducerJobs);
  const { countItemsOnPage } = useSelector((state) => state.reducerUtils);

  const handleEmptyData = (data, arg) => (data && data[arg]) || null;

  const renderSalary = (salary) => {
    let res = '';
    const salaryFrom = handleEmptyData(salary, 'from');
    const salaryTo = handleEmptyData(salary, 'to');
    const salaryCurrency = handleEmptyData(salary, 'currency');
    if (salaryFrom) {
      res += `от ${salaryFrom} `;
    }
    if (salaryTo) {
      res += `до ${salaryTo} `;
    }
    if (salaryCurrency) {
      res += `${salaryCurrency}`;
    }
    return res === '' ? 'Не указана' : res;
  };

  const renderCompany = (item) => {
    let company = null;
    company = handleEmptyData(item, 'name');
    if (company === null) {
      return 'Не указана';
    }
    return company && company.length > 19
      ? company.slice(0, 19) + '...'
      : company;
  };

  const optionsModalHover = (index) => {
    return {
      followCursor: true,
      shiftX: 20,
      shiftY: -index * itemHeight,
    };
  };

  const renderList = () =>
    fullVacancies.map((item, index) => {
      return (
        <Item key={item.id} ref={refItem}>
          <ReactHover options={optionsModalHover(index)}>
            <ReactHover.Trigger type="trigger">
              <NavLinkWrapper>
                <Title
                  href={`https://spb.hh.ru/vacancy/${item.id}`}
                  target="_blank"
                >
                  {item.name.length > 44
                    ? item.name.slice(0, 44) + '...'
                    : item.name}
                </Title>
                <SubLinkWrapper>
                  <SalaryText>Зарплата: {renderSalary(item.salary)}</SalaryText>
                  <CompanyLink
                    href={handleEmptyData(item.employer, 'alternate_url')}
                    target="_blank"
                  >
                    Компания: {renderCompany(item.employer)}
                  </CompanyLink>
                </SubLinkWrapper>
              </NavLinkWrapper>
            </ReactHover.Trigger>
            <ReactHover.Hover type="hover">
              <ModalVacancy item={item} />
            </ReactHover.Hover>
          </ReactHover>
        </Item>
      );
    });

  useEffect(() => {
    /* Узнаем сколько поместится item на странице относительно высоты окна
     */
    if (refList.current && refItem.current) {
      let count = Math.trunc(
        refList.current.clientHeight / refItem.current.clientHeight
      );
      /* Максимум 21 за один запрос */
      if (count > 21) {
        count = 21;
      }
      dispatch(setCountItemsOnPage({ count }));
      setItemHeight(refItem.current.clientHeight);
    }
  }, [countItemsOnPage, dispatch]);

  return (
    <Wrapper>
      <List ref={refList}>{renderList()}</List>
    </Wrapper>
  );
};
