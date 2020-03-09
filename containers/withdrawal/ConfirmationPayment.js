import React, {Component}  from 'react';
import {Content}           from 'adminlte-2-react';
import WithdrawalTable     from './WithdrawalTable';
import {getTransactions}   from '../../store/actions/transaction.actions';
import {connect}           from 'react-redux';
import {TRANSATCION_TYPES} from '../../constants/transactions';
import Loader              from '../../components/UI/Loader';

class ConfirmationPayment extends Component {

  componentDidMount() {
    this.props.getTransactions(TRANSATCION_TYPES.WITHDRAW, 0);
  }

  onPageChange = ({selected}) => {
    this.props.getTransactions(TRANSATCION_TYPES.WITHDRAW, 0, selected);
  };

  render() {
    const data = [
      {
        id: 1,
        username: 'Tolik',
        payment_system: 'payment1',
        sum: {last: '123.321PZM', now: '423.234PZM', percent: '43.43PZM'},
        requisite: {
          value: '3123-3123-3123-3141',
          key: 'dskalbgiuashbdoufhbaw483owhfw8urbeqlgwie4rg8hwe98ornwe8oriugwniuerwbgneiujkbrnluijkl',
        },
        balance: {last: '0.123123', now: '-123123,21'},
        ip: {number: '192.12.32.1', isVerify: true},
        created: '12.04.4281 df',
      },
      {
        id: 1,
        username: 'Tolik',
        payment_system: 'payment1',
        sum: {last: '123.321PZM', now: '423.234PZM', percent: '43.43PZM'},
        requisite: {
          value: '3123-3123-3123-3141',
          key: 'dskalbgiuashbdoufhbaw483owhfw8urbeqlgwie4rg8hwe98ornwe8oriugwniuerwbgneiujkbrnluijkl',
        },
        balance: {last: '0.123123', now: '-123123,21'},
        ip: {number: '192.12.32.1', isVerify: false},
        created: '12.04.4281 df',
      },
    ];
    console.log(this.props.transaction);
    return (
      <Content title="Ожидают подтверждения" browserTitle="Ожидают подтверждения">
        {this.props.transaction.loading && <Loader/>}
        <WithdrawalTable data={this.props.transaction.data}
                         pagination={this.props.transaction.meta}
                         onPageChange={this.onPageChange}
        />
      </Content>
    )
  }
}

const mapStateToProps = ({transaction}) => ({transaction});

const  mapDispatchToProps = dispatch => ({
  getTransactions: (type, status, page) => dispatch(getTransactions(type, status, page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationPayment);